#Pobranie obrazu node.js w najnowszej wersji
FROM node:latest as builder

#Wystawienie portu 4200 na kontenerze
EXPOSE 4200

#Ustawienie katalogu roboczego
WORKDIR /app

#Kopiowanie plików
COPY package.json package-lock.json ./

#Instalacja Angular CLI
RUN npm install -g @angular/cli@16.1.0

#Pobieranie zależności
RUN npm ci --force

#Kopiowanie plików
COPY . .

#Build aplikacji
RUN npm run build

#Uruchomienie aplikacji po starcie kontenera na wszystkich interfejsach sieciowych kontenera
CMD ["ng", "serve", "--host=0.0.0.0"]
