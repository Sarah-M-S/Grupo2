import React from 'react'

export default function useSession() {
    const session = async () => {
        try {
            const data = await fetch('http://localhost:8083/session', {
                method: 'GET',
                headers: {
                  'Content-Type': 'application/json',
                },
              });
              console.log(data.session)
        } catch (err) {
          
        }
      };

      const reading = async () => {
        try {
            const data = await fetch('http://localhost:8083/leitura', {
                method: 'GET',
                headers: {
                  'Content-Type': 'application/json',
                },
              });
              console.log(data.session)
        } catch (err) {
          
        }
      };

      return { session, reading };
}

