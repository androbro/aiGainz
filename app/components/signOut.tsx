import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import { signOut } from 'next-auth/react';

interface SignOutProps {
    visible: boolean;
    onCloseModal: () => void;
}

export default function SignOut({ visible, onCloseModal }: SignOutProps) {
    return (
        <div className="card flex justify-content-center">
            <Dialog header="Personal Settings" visible={visible} className="w-25rem" onHide={() => onCloseModal()}>
                <div className="flex font-bold border-round align-items-center justify-content-center">
                    <Button label="Log out" icon="pi pi-sign-out" className="w-13rem" onClick={() => signOut()}></Button>
                </div>
            </Dialog>
        </div>
    );
}
