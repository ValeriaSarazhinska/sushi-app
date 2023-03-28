import React, {FC, useRef} from "react";
import {Card, CardActions, CardContent, CardHeader, Skeleton, Typography} from "@mui/material";
import {Button} from 'react-admin'
import {cloudinary} from "@app/core/cloudinary";
import {AdvancedImage} from "@cloudinary/react";

interface CloudinaryInputUIProps {
    label: string;
    disabled: boolean;
    onImageSelected: (image: File) => void
    value?: string;
    fitImage?: boolean;
}

export const CloudinaryInputUI: FC<CloudinaryInputUIProps> = ({label, disabled, value, onImageSelected, fitImage}) => {
    const inputRef = useRef<HTMLInputElement>(null)
    const onFileInputChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        if (!e.target.files) {
            return
        }
        const [file] = Array.from(e.target.files)
        onImageSelected(file)
    }

    const onUploadClick = () => {
        inputRef.current?.click()
    }
    const image = cloudinary.image(value);

    console.log(image, value)

    image.addTransformation('c_pad,w_384,h_240,dpr_2.0');
    return (
        <div style={{marginBottom: 20}}>
            <input
                type="file"
                accept="image/*"
                style={{display: 'none'}}
                ref={inputRef}
                onChange={onFileInputChange}/>
            <Card variant="outlined">
                <CardHeader title={label}/>
                <CardContent>
                    {value ? (
                        <AdvancedImage cldImg={image} widt={384} height={240}/>)
                        : (<Skeleton variant="rectangular" width={384} height={240}/>)}
                </CardContent>
                <CardActions>
                    <Button variant="contained" onClick={onUploadClick} disabled={disabled}>
                        <Typography>
                            Завантажити
                        </Typography>
                    </Button>
                </CardActions>
            </Card>
        </div>
    )
}