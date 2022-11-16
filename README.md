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

This repo will be using MongoDB for multityped answer data -- multiple choices or a single answer. <br>
A response data would be shaped as follows:

```typescript
const questionAnswerSchema = new Schema({
  answer: {
    type: [String],
    required: true,
  },
});

const responseSchema = new Schema({
  respondeeEmail: {
    type: String,
    required: true,
   },
  formId: {
    type: String,
    required: true,
  },
  answers: {
    type: Map,
    of: questionAnswerSchema,
    required: true,
  },
});

export default responseSchema;
```

```json
{
  "respondeeEmail": "bob@gmail.com",
  "formId": "57e80a51-61f5-41d0-971a-6798d223fc9b",
  "answers": {
    "5f0104a5-25a5-4f8f-a509-4e97d11cf968": {
      "answer": ["Cats", "Dogs", "Rabbits"]
    },
    "44ac68e9-80cd-4e3e-9330-9b5bb42ec5d8": {
      "answer": ["I like cats because they reduce my stress. I like dogs because they're friendly. I like rabbits because of their ears."]
    }
  }
}
```

The question answer will be an object containing `answer`, so that new properties can be added without migrating.
`answer` will be an array of strings so that multiple answers through checkboxes can be stored, eventhough if it's a single answer.

The properties in `answers` will be the question ID and not the question number.
So that in case another form question was added between the pre-existing ones, the answer data would still point to that question.
