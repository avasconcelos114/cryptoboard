FROM nginx:latest

EXPOSE 80

COPY config/nginx.conf /etc/nginx/nginx.conf

## If deploying own instance, uncomment below
# COPY ./build/* /var/www/

# Start up nginx server
RUN nginx
