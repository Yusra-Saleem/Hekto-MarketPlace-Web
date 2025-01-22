interface ReviewSchema {
  name: string;
  type: string;
  title: string;
  fields: {
    name: string;
    type: string;
    title: string;
    description: string;
    validation?: (Rule: any) => any;
    to?: { type: string }[];
  }[];
}

const reviewSchema: ReviewSchema = {
  name: 'review',
  type: 'document',
  title: 'Review',
  fields: [
    {
      name: 'productId',
      type: 'reference',
      to: [{ type: 'product' }],
      title: 'Product',
      description: 'The product this review is for',
    },
    {
      name: 'name',
      type: 'string',
      title: 'Name',
      description: 'Name of the reviewer',
    },
    {
      name: 'rating',
      type: 'number',
      title: 'Rating',
      description: 'Rating given by the reviewer',
      validation: (Rule) => Rule?.min(1)?.max(5) // Use optional chaining
    },
  ],
};
