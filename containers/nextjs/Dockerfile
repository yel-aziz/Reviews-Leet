FROM node:buster

RUN mkdir /home/front-end
COPY ./front-end/ /home/front-end/

COPY ./tools/script.sh /
RUN chmod 777 /script.sh

CMD ["./script.sh"]