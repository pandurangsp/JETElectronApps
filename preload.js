const { ipcRenderer, contextBridge } = require('electron');
const path = require('path');


contextBridge.exposeInMainWorld('electron', {
    model: {
        async raiseNotification(msg) {
            try {
                await ipcRenderer.invoke('raiseNotification',msg);
            }
            catch (e) {
                throw e;
            }
        }
    }
})