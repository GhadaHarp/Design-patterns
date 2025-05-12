type ToastType = 'success' | 'error' | 'info';
type ToastListener = (
  type: ToastType | 'dismiss-all',
  message?: string
) => void;

class Toast {
  private listeners: ToastListener[] = [];

  subscribe(listener: ToastListener) {
    this.listeners.push(listener);
  }

  unsubscribe(listener: ToastListener) {
    this.listeners = this.listeners.filter((l) => l !== listener);
  }

  private notify(type: ToastType | 'dismiss-all', message?: string) {
    for (const listener of this.listeners) {
      listener(type, message);
    }
  }

  success(msg: string) {
    this.notify('success', msg);
  }

  error(msg: string) {
    this.notify('error', msg);
  }

  info(msg: string) {
    this.notify('info', msg);
  }

  dismissAll() {
    this.notify('dismiss-all');
  }
}

export const toast = new Toast();
