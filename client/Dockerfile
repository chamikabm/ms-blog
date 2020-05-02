FROM node:alpine

# Unfortunately, create-react-app currently has a bug that prevents it from running correctly in a docker container.
# Create-react-app does have an open issue tracking this: https://github.com/facebook/create-react-app/issues/8688
# Following code solves the issue.
ENV CI=true

WORKDIR /app
COPY package.json ./
RUN npm install

COPY ./ ./

CMD ["npm", "start"]

