interface ValidationRule {
  required?: () => ValidationRule;
  error?: (message: string) => ValidationRule;
  min?: (value: number) => ValidationRule;
  max?: (value: number) => ValidationRule;
  warning?: (message: string) => ValidationRule;
}

interface ProductField {
  name: string;
  type: string;
  title: string;

}

interface Options {
  hotspot?: boolean;
  list?: { title: string; value: string }[];
}

interface ProductField {
  name: string;
  type: string;
  title: string;
  validation?: (Rule: ValidationRule) => ValidationRule;
  options?: Options;
  description?: string;
  of?: Array<{ type: string }>;
}

interface ProductSchema {
  name: string;
  type: string;
  title: string;
  fields: ProductField[];
}

const productSchema: ProductSchema = {
  name: 'product',
  type: 'document',
  title: 'Product',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
      validation: (Rule) => Rule.required!().error!('Name is required'),
    },
    {
      name: 'price',
      type: 'number',
      title: 'Price',
      validation: (Rule) => Rule.required!().error!('Price is required'),
    },
    {
      name: 'discountPercentage',
      type: 'number',
      title: 'Discount Percentage',
      validation: (Rule) =>
        Rule.min!(0).max!(100).warning!('Discount must be between 0 and 100.'),
    },
    {
      name: 'isFeaturedProduct',
      type: 'boolean',
      title: 'Is Featured Product',
    },
    {
      name: 'stockLevel',
      type: 'number',
      title: 'Stock Level',
      validation: (Rule) => Rule.min!(0).error!('Stock level must be a positive number.'),
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image',
      options: {
        hotspot: true,
      },
      description: 'Upload an image of the product.',
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
      validation: (Rule) =>
        Rule.max!(150).warning!('Keep the description under 150 characters.'),
    },
    {
      name: 'tags',
      type: 'array',
      title: 'Tags',
      of: [{ type: 'string' }],
      description: 'Add tags for the product (e.g., Leather, Medium).',
    },
    {
      name: 'sizes',
      type: 'array',
      title: 'Sizes',
      of: [{ type: 'string' }],
      description: 'Add available sizes for the product (e.g., Small, Medium).',
    },
    {
      name: 'colors',
      type: 'array',
      title: 'Colors',
      of: [{ type: 'string' }],
      description: 'Add available colors for the product (e.g., Black, Brown).',
    },
    {
      name: 'category',
      type: 'string',
      title: 'Category',
      options: {
        list: [
          { title: 'Chair', value: 'Chair' },
          { title: 'Sofa', value: 'Sofa' },
        ],
      },
      validation: (Rule) => Rule.required!().error!('Category is required'),
    },
  ],
};

export default productSchema;