FROM node
RUN mkdir -p /home/backend
WORKDIR /home/backend
COPY package*.json /home/backend
RUN npm install
COPY . .
EXPOSE 8080
CMD ["node", "/home/backend/index.js"]
