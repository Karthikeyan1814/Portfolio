import './Picture.css'
import img1 from './logos/karthi.PNG'
function Picture() {
  

  return (
    <div id="my-container">
      <img src={img1} alt="robot" className='my-img' />
    </div>
  );
}

export default Picture;
