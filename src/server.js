// 1. Importando o 'app' do arquivo 'app.js'...
import app from './app.js'

// 2. Variável que recebe a porta que irá rodar o sistema:
const PORT = 3000;

// 3. "Listen" e recado que irá aparecer enquanto o sistema estiver rodando:
app.listen(PORT, () => {
    console.log(`
        
        -------------------------------------------------
        | Servidor executando em: http://localhost:${PORT} |
        -------------------------------------------------

        `)
})