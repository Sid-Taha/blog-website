export const cards = {
  title: 'Cards',
  name: 'cards',
  type: 'document',
  fields: [
    {
      title: 'Cards',
      name: 'cards',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {title: 'Card Image', name: 'cardImg', type: 'image'},
            {title: 'Id', name: 'id', type: 'number'},
            {title: 'Category', name: 'category', type: 'string'},
            {title: 'Date', name: 'date', type: 'date'},
            {title: 'Heading', name: 'heading', type: 'string'},
            {title: 'Description', name: 'description', type: 'array', 
                of: [{type: 'block'}]},
          ],
        }
      ]
    }
  ],
}