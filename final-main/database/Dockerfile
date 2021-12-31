
# Pull base image.
FROM mongo:latest

# Install MongoDB.
#RUN \
  
# apt-get update && \
# apt-get install -y mongodb-org && \
 #rm -rf /var/lib/apt/lists/*

# Define working directory.
WORKDIR /data

# Define default command.
#CMD ["mongod"]

volume ["/data/db"]
# Expose ports.
#   - 27017: process
#   - 28017: http

EXPOSE 27017
#EXPOSE 28017
