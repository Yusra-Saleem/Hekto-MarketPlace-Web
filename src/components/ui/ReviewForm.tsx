// components/ui/ReviewForm.tsx
import { useState } from 'react';
import StarRating from './StarRating';
import { toast } from 'react-toastify';
import { client } from '../../sanity/lib/client';

interface ReviewFormProps {
  productId: string;
  onReviewSubmit: () => void;
}

const ReviewForm = ({ productId, onReviewSubmit }: ReviewFormProps) => {
  const [name, setName] = useState('');
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const review = {
      _type: 'review',
      productId: {
        _type: 'reference',
        _ref: productId,
      },
      name,
      rating,
      comment,
      date: new Date().toISOString(),
    };

    try {
      await client.create(review);
      toast.success('Review submitted successfully!');
      onReviewSubmit(); // Refresh reviews
      setName('');
      setRating(0);
      setComment('');
    } catch (error) {
      toast.error('Failed to submit review. Please try again.');
      console.error('Error submitting review:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="mt-1 block w-full border border-gray-300 rounded-md p-2"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Rating</label>
        <StarRating
          rating={rating}
          onRatingChange={setRating}
          editable={true}
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Comment</label>
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          required
          className="mt-1 block w-full border border-gray-300 rounded-md p-2"
        />
      </div>
      <button
        type="submit"
        className="bg-[#FB2E86] text-white rounded-xl px-4 py-2 hover:bg-[#FB2E86]/90"
      >
        Submit Review
      </button>
    </form>
  );
};

export default ReviewForm;