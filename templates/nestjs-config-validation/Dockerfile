###################
# BUILD FOR LOCAL DEVELOPMENT
###################
FROM node:16.14.2-alpine3.15 As development

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci

COPY . .

###################
# BUILD FOR PRODUCTION
###################
FROM node:16.14.2 As build

WORKDIR /usr/src/app

COPY package*.json ./
COPY --from=development /usr/src/app/node_modules ./node_modules
COPY . .

RUN npm run build
RUN npm run nestdocs
RUN ls -la .
ENV NODE_ENV production
RUN npm ci --only=production && npm cache clean --force

###################
# PRODUCTION
###################
FROM node:16.14.2-alpine3.15 As production

RUN apk --no-cache add curl unzip wget
RUN wget https://releases.hashicorp.com/consul-template/0.29.1/consul-template_0.29.1_linux_amd64.zip \
    && unzip consul-template_0.29.1_linux_amd64.zip \
    && chmod +x consul-template \
    && mv consul-template /usr/local/bin \
    && rm consul-template_0.29.1_linux_amd64.zip

COPY --from=build /usr/src/app/start.sh .
COPY --from=build /usr/src/app/template.hcl .

RUN chmod +x start.sh

COPY --from=build /usr/src/app/node_modules ./node_modules
COPY --from=build /usr/src/app/dist ./dist
COPY --from=build /usr/src/app/src/config ./src/config
COPY --from=build /usr/src/app/src/models ./src/models
COPY --from=build /usr/src/app/documentation ./documentation

CMD [ "./start.sh" ]
