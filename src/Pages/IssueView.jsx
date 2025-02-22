import { useParams } from 'react-router-dom';

const IssueView = () => {
  const { volumeNumber, issueNumber } = useParams();

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">
        Volume {volumeNumber} - Issue {issueNumber}
      </h2>
      {/* Add your issue content here */}
    </div>
  );
};

export default IssueView;