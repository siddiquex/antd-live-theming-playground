import { Typography, Input, InputNumber, Slider } from 'antd';
import { useContext, useEffect, useState } from "react";
import { ThemeConfigContext } from "../App.jsx";

const renderControlItems = ({ key, type, min, max, config, setConfig }) => {
 let element = null;
 const update = (value) => setConfig((state) => ({ ...state, [key]: value }))
 switch (type) {
   case 'color':
     element = (
       <Input
         value={config[key]}
         type={type}
         onChange={(e) => update(e.target.value)}
       />
     );
     break;
   case 'slider':
     element = (
       <div className='flex gap-10'>
         <Slider
           className='width-70_percent'
           min={min}
           max={max}
           onChange={(value) => update(value)}
         />
         <InputNumber
           min={min}
           max={max}
           value={config[key]}
           onChange={(value) => update(value)}
         />
       </div>
     );
     break;
   default:
     break;
 }
 return element;
}
const controlItems = [
  { key: 'colorPrimary', label: 'Brand color', type: 'color' },
  { key: 'colorTextBase', label: 'Text color', type: 'color' },
  { key: 'colorBgBase', label: 'Background color', type: 'color' },
  { key: 'colorBgContainer', label: 'Card background color', type: 'color' },
  { key: 'colorBorderSecondary', label: 'Card border color', type: 'color' },
  { key: 'fontSize', label: 'Font size', type: 'slider', min: 14, max: 20 },
  { key: 'borderRadius', label: 'Border radius', type: 'slider', min: 0, max: 20 },
]
const Controls = () => {
  const [config, setConfig] = useState({
    colorPrimary: '#1677ff',
    colorTextBase: 'rgba(0, 0, 0, 0.88)',
    colorBgBase: 'rgba(255,255,255,0.62)',
    fontSize: 14,
    borderRadius: 5,
    colorBgContainer: '#fff',
    colorBorderSecondary: '#f0f0f0',
  });
  const { setThemeConfig } = useContext(ThemeConfigContext);

  useEffect(() => {
    setThemeConfig((state) => ({
      token: {
        ...state,
        ...(config?.colorPrimary && { colorPrimary: config.colorPrimary }),
        ...(config?.colorTextBase && { colorTextBase: config.colorTextBase }),
        ...(config?.colorBgBase && { colorBgBase: config.colorBgBase }),
        ...(config?.fontSize && { fontSize: config.fontSize }),
        ...(config?.borderRadius && { borderRadius: config.borderRadius }),
      },
      components: {
        Card: {
          ...(config?.colorBgContainer && { colorBgContainer: config.colorBgContainer }),
          ...(config?.colorBorderSecondary && { colorBorderSecondary: config.colorBorderSecondary }),
        },
      },
    }));
  }, [config, setThemeConfig]);

  return (
    <div id='controls'>
      <Typography.Title>Controls</Typography.Title>
      {controlItems.map(({ key, label, type, min, max}) => (
        <div key={key} className='mb-10 flex justify-space_between align_items_center gap-20'>
          <Typography.Text>{label}</Typography.Text>
          <div className='width-50_percent'>
            {renderControlItems({ key, type, min, max, config, setConfig })}
          </div>
        </div>
      ))}
    </div>
  )
}

export default Controls;
