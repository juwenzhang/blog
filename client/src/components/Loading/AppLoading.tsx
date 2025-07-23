import React, { useEffect, useState } from 'react';
// import { useLocation } from 'react-router-dom';

interface ModernLoadingProps {
  text?: string;
  isLoading?: boolean;
  primaryColor?: string;
  bgColor?: string;
  size?: 'small' | 'medium' | 'large';
}

const ModernLoading: React.FC<ModernLoadingProps> = ({
  text = '加载中...',
  isLoading,
  primaryColor = '#4f46e5', 
  bgColor = 'rgba(255, 255, 255, 0.9)', 
  size = 'medium',
}) => {
  // const location = useLocation();
  const [visible, setVisible] = useState(false);
  const [dotState, setDotState] = useState(0);

  // 控制显示/隐藏过渡
  useEffect(() => {
    if (isLoading) {
      setVisible(true);
    } else {
      const timer = setTimeout(() => setVisible(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  // 省略号动画
  useEffect(() => {
    if (!isLoading) return;
    
    const interval = setInterval(() => {
      setDotState(prev => (prev + 1) % 4);
    }, 400);
    return () => clearInterval(interval);
  }, [isLoading]);

  // 尺寸配置
  const sizeConfig = {
    small: {
      loaderSize: 'w-8 h-8',
      textSize: 'text-sm',
      containerPadding: 'p-4',
    },
    medium: {
      loaderSize: 'w-12 h-12',
      textSize: 'text-base',
      containerPadding: 'p-6',
    },
    large: {
      loaderSize: 'w-16 h-16',
      textSize: 'text-lg',
      containerPadding: 'p-8',
    },
  };

  const config = sizeConfig[size];

  if (!visible && !isLoading) return null;

  return (
    <div 
      className={`fixed inset-0 z-[9999] flex items-center justify-center transition-opacity duration-300 ease-in-out`}
      style={{
        backgroundColor: bgColor,
        opacity: visible ? 1 : 0,
        backdropFilter: 'blur(8px)',
      }}
    >
      {/* 加载容器 */}
      <div className={`flex flex-col items-center ${config.containerPadding} rounded-xl shadow-lg bg-white/95`}>
        {/* 脉冲加载动画 */}
        <div className={`relative ${config.loaderSize} mb-4`}>
          {/* 外层光环 */}
          <div className="absolute inset-0 rounded-full border-2 border-primary/20 animate-ping" 
               style={{ borderColor: `${primaryColor}20` }}></div>
          {/* 中层旋转环 */}
          <div className="absolute inset-1 rounded-full border-2 border-t-primary border-r-transparent animate-spin"
               style={{ borderTopColor: primaryColor }}></div>
          {/* 中心圆点 */}
          <div className="absolute inset-3 rounded-full"
               style={{ backgroundColor: primaryColor }}></div>
        </div>

        {/* 加载文本与动态省略号 */}
        <div className={`flex items-center gap-1 ${config.textSize} font-medium text-gray-700`}>
          <span>{text}</span>
          <span>
            {[...Array(3)].map((_, i) => (
              <span 
                key={i} 
                className="inline-block w-1.5 h-1.5 rounded-full transition-opacity duration-200"
                style={{ 
                  backgroundColor: primaryColor,
                  opacity: i < dotState ? 1 : 0.3
                }}
              ></span>
            ))}
          </span>
        </div>
      </div>

      {/* 背景装饰（微妙网格） */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" 
           style={{ 
             backgroundImage: 'linear-gradient(#e5e7eb 1px, transparent 1px), linear-gradient(90deg, #e5e7eb 1px, transparent 1px)',
             backgroundSize: '20px 20px'
           }}></div>
    </div>
  );
};

export default ModernLoading;