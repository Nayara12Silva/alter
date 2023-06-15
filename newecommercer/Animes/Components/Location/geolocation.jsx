import React from "react";

export function Geolocation() {
        if (navigator.geolocation) {//verificar se o navegador suporta a API Geolocation
            navigator.geolocation.getCurrentPosition(// getcurrentposition para obter a localização atual do usuário.
              (position) => {
                const latitude = position.coords.latitude;
                const longitude = position.coords.longitude;
                console.log('Latitude:', latitude);
                console.log('Longitude:', longitude);
          
                // Aqui você pode fazer o que quiser com a localização obtida
              },
              (error) => {
                console.error('Erro ao obter a localização:', error);
              }
            );
          } else {
            console.error('Geolocalização não é suportada pelo seu navegador');
          }
    return true;
}
  