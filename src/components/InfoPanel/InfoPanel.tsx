import * as React from 'react';

export interface IInfoPanelProps {
    created?: string;
    description?: string;
    name?: string;
    title?: string;
    state?: string;
    approval_status?: string;
}

export const InfoPanel: React.SFC<IInfoPanelProps> = ({
    approval_status,
    description,
    name,
    state,
    title,
}) => (
    <div className="infoPanel">
        <h1>{title}</h1>
        <div className="infoPanel__content">
            <div className="infoPanel__description">{description}</div>
            <div className="infoPanel__other">
                <div>Name: {name} </div>
                <div>Approval Status: {approval_status} </div>
                <div>State: {state} </div>
            </div>
        </div>
    </div>
)