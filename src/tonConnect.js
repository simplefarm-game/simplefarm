import { TonConnectUI } from "@tonconnect/ui";

export function initializeTonConnectUI() {
    // Inicializa o TonConnectUI
    const tonConnectUI = new TonConnectUI({
        manifestUrl: 'https://simplefarm-game.github.io/simplefarm/tonconnect-manifest.json',
        buttonRootId: 'ton-connect', // A referência para o botão será inserida aqui
    });
}