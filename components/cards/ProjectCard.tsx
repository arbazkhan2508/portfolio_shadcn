
type ProjectCardProps = {
    title: string;
    image: string;
    tags: string[];
};

export const ProjectCard = ({ title, image, tags }: ProjectCardProps) => {
    return (
        <div className="w-full">
            <div
                className="bg-[#f1f6f9] p-4 rounded-2xl flex flex-col items-center text-center"
            >
                {/* <Image */}
                <img
                    alt={title}
                    src={"/project_img.png"}
                    // fill
                    className="object-contain w-full h-full"
                />
            </div>
            <div className="w-full flex items-center justify-between py-2 lg:py-4">
                <p className="text-gray-800 font-medium mb-1">{title}</p>
                <div className="flex gap-2 text-xs text-gray-500">
                    {tags.map((tag, i) => (
                        <span
                            key={i}
                            className="bg-gray-100 px-2 py-1 rounded-sm border border-gray-200"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};