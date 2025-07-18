import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// Interface untuk menu item
interface MenuItem {
  name: string;
  description: string;
  price: string;
  emoji: string;
}

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Rumah Makan Padang Sederhana';

  // Data menu makanan Padang
  menuItems: MenuItem[] = [
    {
      name: 'Rendang Daging',
      description:
        'Daging sapi empuk dengan bumbu rempah khas Minang yang kaya akan cita rasa',
      price: 'Rp 35.000',
      emoji: '🍖',
    },
    {
      name: 'Ayam Pop',
      description: 'Ayam rebus dengan bumbu kuning yang gurih dan lezat',
      price: 'Rp 25.000',
      emoji: '🍗',
    },
    {
      name: 'Gulai Kambing',
      description:
        'Gulai kambing dengan kuah santan yang kental dan bumbu yang meresap',
      price: 'Rp 40.000',
      emoji: '🐐',
    },
    {
      name: 'Ikan Bakar',
      description:
        'Ikan segar dibakar dengan bumbu andaliman yang pedas dan harum',
      price: 'Rp 30.000',
      emoji: '🐟',
    },
    {
      name: 'Sayur Daun Singkong',
      description: 'Sayur daun singkong dengan santan yang segar dan bergizi',
      price: 'Rp 15.000',
      emoji: '🥬',
    },
    {
      name: 'Perkedel Jengkol',
      description: 'Perkedel jengkol yang renyah di luar dan lembut di dalam',
      price: 'Rp 20.000',
      emoji: '🥔',
    },
    {
      name: 'Dendeng Balado',
      description:
        'Dendeng daging tipis dengan sambal balado yang pedas mantap',
      price: 'Rp 45.000',
      emoji: '🌶️',
    },
    {
      name: 'Nasi Putih',
      description: 'Nasi putih pulen sebagai pelengkap hidangan',
      price: 'Rp 8.000',
      emoji: '🍚',
    },
  ];

  // Fungsi untuk scroll ke bagian menu
  scrollToMenu(): void {
    const menuSection = document.getElementById('menu');
    if (menuSection) {
      menuSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }

  // Fungsi untuk submit pesan kontak
  onSubmitMessage(
    nameInput: HTMLInputElement,
    emailInput: HTMLInputElement,
    messageInput: HTMLTextAreaElement
  ): void {
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();

    if (name && email && message) {
      alert(
        `Terima kasih ${name}! Pesan Anda telah diterima. Kami akan segera menghubungi Anda di ${email}.`
      );

      // Reset form setelah submit
      nameInput.value = '';
      emailInput.value = '';
      messageInput.value = '';
    } else {
      alert('Mohon lengkapi semua field yang diperlukan.');
    }
  }
}
