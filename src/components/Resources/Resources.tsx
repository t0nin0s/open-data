import * as React from 'react';

export interface IResource {
    date?: string;
    description?: string;
    created?: string;
    url?: string;
    format?: string;
    resource_type?: string;
}

export interface IResourcesProps {
    resources: IResource[];
}

export const Resources: React.SFC<IResourcesProps> = ({resources}) => {
    return (
        <div className="resources">
            <h2>Resources</h2>
            {resources.map((resource, id) => (
                    <div className="resource" key={id}>
                        <h3>{resource.description}</h3>
                        <div><span className="tag">Year:</span> {resource.date} </div>
                        <div><span className="tag">Resource Type:</span> {resource.resource_type}</div>
                        <div><span className="tag">Format:</span> {resource.format}</div>
                        <a href={resource.url}>Download</a>
                    </div>
            ))}
        </div>
    )
}