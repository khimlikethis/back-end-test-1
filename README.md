
# Back-End-Test1

Express.js


## Deployment

To deploy this project run

```bash
    npm install
    nonode app.js
```


##  Auth

| Header | Description                                          |
| :------| :---------------------------------------------------- |
| `Authorization`| **Required**. sample: `DEVCREW-BACKEND-TEST` |
## API Reference

#### POST multiple

```http
  POST /multiple
```



| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `a` | `int` | **Required**. |
| `b` | `int` | **Required**. |

Takes two numbers and returns the multiple.

