import React from 'react';
import { Button } from 'primereact/button';

export default function TopBar() {
    return (
        <div className="w-full flex justify-content-between">
            <div className="text-500 text-m font-bold ml-4 align-self-center">Current Page</div>
            <div className="flex justify-content-center gap-4">
                <div className="align-self-center">
                    <Button className="h-2rem w-2rem" icon="pi pi-cog" rounded text severity="secondary" aria-label="Bookmark" />
                </div>
                <div className="align-self-center">
                    <Button className="p-button-link p-0" rounded>
                        <img alt="logo" src="https://apollo.primereact.org/layout/images/avatar/avatar.png" className="h-2rem" />
                    </Button>
                </div>
            </div>
        </div>
    );
}
