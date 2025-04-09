import React from 'react';
import { categoriesData } from '@/utils/data';

export const CategoriesComponent = () => {
    return (
        <div>
            <div>
                <div className="flex flex-col gap-[60px]">
                    <div className="flex py-[20px] items-center justify-between">
                        <h2 className="text-[20px] font-semibold text-black">Categories</h2>
                        <button className="flex items-center gap-2 text-[14px] text-slate-800 hover:text-slate-500 bg-azure-mist hover:bg-azure-mist/50 rounded-full px-4 py-2 font-semibold transition-all duration-200 ease-in-out">
                            <span>See all categoires</span>
                            <span>▶</span>
                        </button>
                    </div>
                    <div>
                        <div className="flex gap-[40px]">
                            {categoriesData.slice(0, 6).map((category) => (
                                <a href={category.categoryUrl} key={category.id} className="flex rounded-[30px] shadow-lg overflow-hidden items-center justify-center"  style={{ width: "100%", maxWidth: "calc(100% / 6)", backgroundColor: `${category.categoryThemeColor}` }}>
                                    <div key={category.id} className="flex flex-col items-center justify-center gap-[10px] py-[30px] px-[20px]">
                                        <img src={category.categoryImageUrl} alt={category.title} className="w-full aspect-square max-h-[100px] h-full object-contain rounded-lg mb-4" />
                                        <h3 className="text-[16px] font-semibold text-black">{category.title}</h3>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}