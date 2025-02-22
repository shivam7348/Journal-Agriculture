import { useParams } from 'react-router-dom';

 const VolumeView = () => {
  const { volumeNumber } = useParams();

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Volume {volumeNumber}</h2>
      {/* Add your volume content here */}
    </div>
  );
};

export default VolumeView;