import React from 'react';
import { Skeleton } from 'primereact/skeleton';
import { Card } from 'primereact/card';

export default function CardSkeleton() {
    return (
        <Card>
            <div className="grid">
                <div className="align-content-center col-6 pb-0 pt-0">
                    <div className="font-bold black text-4xl">
                        <Skeleton className="mb-2 h-full w-full" />
                    </div>
                    <div>
                        <div>
                            <div>
                                <Skeleton height="1rem" className="w-10 mb-2" />
                            </div>
                            <div>
                                <Skeleton height="2rem" className="w-8 mb-2" />
                            </div>
                            <div>
                                <Skeleton height="1rem" className="w-2" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-6 mb-2">
                    <Skeleton height="6rem" className="w-full " />
                </div>
            </div>
        </Card>
    );
}
