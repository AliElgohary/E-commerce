# E-commerce Server-Side

## User APIs

1. To get all the users - A GET request

   - Endpoint: [http://localhost:5000/users]

2. To create a new user - A POST request

   - Endpoint: [http://localhost:5000/users]
   - JSON Body Example:
     ```json
     {
       "userName": "ali",
       "email": "ali@example.com",
       "password": "secret",
       "address": [
         {
           "street": "sammanod",
           "city": "mansoura",
           "state": "egypt"
         }
       ]
     }
     ```

3. To log in with an existing user - A POST request

   - Endpoint: [http://localhost:5000/users/signin]
   - JSON Body Example:
     ```json
     {
       "email": "ali@example.com",
       "password": "newPassword"
     }
     ```

4. To Deactivate Your Account user - A PUT request

   - Endpoint: [http://localhost:5000/users/deactivate]
   - You need to be logged in to deactivate your account

5. To Update an existing user - A PATCH request

   - Endpoint: [http://localhost:5000/users/:id]
   - You need to be logged in as admin to update your account
   - JSON Body Example:
     ```json
     {
       "userName": "nour",
       "email": "nour@example.com",
       "password": "secret"
     }
     ```

6. To reset your password - A PUT request

   - Endpoint: [http://localhost:5000/users/reset]
   - JSON Body Example:
     ```json
     {
       "newPassword": "newPassword"
     }
     ```

## Products APIs

1. Get all products - A GET request

   - Endpoint: [http://localhost:5000/product]

2. Get products with paginate(three by three) - A GET request

   - Endpoint: [http://localhost:5000/products/paginate?page=1]

3. Get one product - A GET request

   - Endpoint: [http://localhost:5000/product]
   - JSON Body Example:

   ```json
   {
     "productName": "Product Name"
   }
   ```

4. Create a new product - A POST request

   - Endpoint: [http://localhost:5000/product]
   - JSON Body Example:
     ```json
     {
       "productName": "product7",
       "slug": "sample-product",
       "priceAfterDiscount": 90,
       "finalPrice": 100,
       "image": "sample-image.jpg",
       "stock": 50,
       "category": "newOne"
     }
     ```

5. To get products in the same categoty - A GET request

   - Endpoint: [http://localhost:5000/products/category]
   - JSON Body Example:
     ```json
     {
       "category": "category Name"
     }
     ```

6. update product by ID - A PATCH request
   - Endpoint: [http://localhost:5000/product/:id]
   - JSON Body Example:
     ```json
     {
       "productName": "Updated Product Name",
       "slug": "updated-product-slug",
       "priceAfterDiscount": 0,
       "finalPrice": 20,
       "image": "updated-image-url",
       "stock": 100,
       "category": "saasdsa"
     }
     ```

## Categoty APIs

1. Get all Categories - A GET request

   - Endpoint: [http://localhost:5000/category]

2. Get one Categories - A GET request

   - Endpoint: [http://localhost:5000/category]
   - JSON Body Example:

   ```json
   {
     "categoryName": "Name"
   }
   ```

3. Create a new Category - A POST request

   - Endpoint: [http://localhost:5000/category]
   - JSON Body Example:
     ```json
     {
       "categoryName": "electronics",
       "image": "asdhadkxxxjashdk"
     }
     ```

4. update Category by ID - A PATCH request
   - Endpoint: [http://localhost:5000/category/id]
   - JSON Body Example:
     ```json
     {
       "categoryName": "newUpdate",
       "image": "thisistheimageurl"
     }
     ```

## Coupons APIs

1. Get all Coupons - A GET request

   - Endpoint: [http://localhost:5000/coupon]

2. Create a new Coupon - A POST request

   - Endpoint: [http://localhost:5000/coupon]
   - JSON Body Example:
     ```json
     {
       "couponCode": "vxcz",
       "value": 11,
       "expireIn": "2024-12-31"
     }
     ```

3. update Coupon by ID - A PUT request

   - Endpoint: [http://localhost:5000/coupon]
   - JSON Body Example:
     ```json
     {
       "couponCode": "vxcz",
       "value": 43,
       "expireIn": "2024-2-30"
     }
     ```

4. apply Coupon on all products - A PATCH request

   - Endpoint: [http://localhost:5000/coupon]
   - JSON Body Example:
     ```json
     {
       "productName": "Product Name",
       "couponCode": "code"
     }
     ```

5. delete Coupon - A DELETE request

   - Endpoint: [http://localhost:5000/coupon]
   - JSON Body Example:
   ```json
   {
     "couponCode": "code"
   }
   ```

## Cart APIs

1. create Cart - A POST request

   - Endpoint: [http://localhost:5000/cart]
   -user needs to be logged in
   - JSON Body Example:
   ```json
   {

   }
   ```

2. update Cart - A PATCH request

   - Endpoint: [http://localhost:5000/cart]
   -user needs to be logged in
   - JSON Body Example:
   ```json
   {
    "cartId" : "65c0d55c9803f6ad5175f607",
    "productNames": ["Product Name"]
   }
   ```

3. apply coupon on Cart - A PUT request

   - Endpoint: [http://localhost:5000/cart/coupon/]
   -user needs to be logged in
   - JSON Body Example:
   ```json
   {
    "couponCode":"salem"
   }
   ```
