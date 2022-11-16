# rayhanwijaya-forms

This is a web application for responding to forms belonging to the rayhanwijaya.com domain for registration or surveying purposes.

## Tech Stack

### Frontend
* NextJS
* Sass

### Backend
* tRPC
* MongoDB
* Mongoose

This repo will be using MongoDB for multityped response data -- multiple choices or a single response. <br>
A response data would be shaped as follows:

```typescript
const questionResponseSchema = new Schema({
  response: {
    type: [String],
    required: true,
  },
});

const responseSchema = new Schema({
  respondeeEmail: {
    type: string,
    required: true,
   },
  formId: {
    type: string,
    required: true,
  },
  responses: {
    type: Map,
    of: questionResponseSchema,
    required: true,
  },
});

export default responseSchema;
```

```json
{
  "respondeeEmail": "bob@gmail.com",
  "formId": "57e80a51-61f5-41d0-971a-6798d223fc9b",
  "responses": {
    "5f0104a5-25a5-4f8f-a509-4e97d11cf968": {
      "response": ["Cats", "Dogs", "Rabbits"]
    },
    "44ac68e9-80cd-4e3e-9330-9b5bb42ec5d8": {
      "response": ["I like cats because they reduce my stress. I like dogs because they're friendly. I like rabbits because of their ears."]
    }
  }
}
```

The question response will be an object containing `response`, so that new properties can be added without migrating.
`response` will be an array of strings so that multiple responses through checkboxes can be stored, eventhough if it's a single response.

The properties in `responses` will be the question ID and not the question number.
So that in case another form question was added between the pre-existing ones, the response data would still point to that question.
