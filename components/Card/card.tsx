'use client';
import React from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';

interface CustomCardProps {
    title?: string;
    subTitle?: string;
    content?: string;
    footerContent?: string;
}

function CustomCard({ title, subTitle, content, footerContent }: CustomCardProps) {
    const header = (
        <img alt="Card" src="https://primefaces.org/cdn/primereact/images/usercard.png" />
    );
    const footer = (
        <div className="flex flex-wrap justify-content-end gap-2">
            <Button label="Save" icon="pi pi-check" />
            <Button label="Cancel" icon="pi pi-times" className="p-button-outlined p-button-secondary" />
        </div>
    );

    return (
        <Card
            title={title}
            subTitle={subTitle}
            footer={footerContent ? footerContent : footer}
            header={header}
            className="md:w-25rem"
        >
            <p className="m-0">
                {content}
            </p>
        </Card>
    );
}

export default CustomCard;