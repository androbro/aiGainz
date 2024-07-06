'use client';
import { useLoaderStore } from '@/app/store/loaderStore';
import { useLoading } from '@/hooks/useLoading';

interface PageProps {}

export default function Dashboard({}: PageProps) {
    const { setIsLoading } = useLoaderStore();
    useLoading(false, setIsLoading);
    return (
        <>
            <div className="layout-container layout-light layout-colorscheme-menu layout-static layout-static-inactive p-ripple-disabled">
                <div>DASHBOARD A PWA</div>
            </div>
        </>
    );
}
