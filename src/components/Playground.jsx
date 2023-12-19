import Controls from "./Controls.jsx";
import AppPreview from "./AppPreview.jsx";

const Playground = () => {

  return (
    <div id='playground' className='flex gap-10'>
      <Controls />
      <AppPreview />
    </div>
  );
}

export default Playground;
