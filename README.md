# MiraTech Portfolio - HTML/CSS/JS Version

Saf HTML, CSS ve JavaScript ile oluşturulmuş profesyonel portfolyo web sitesi! 🎉

## 📁 Dosyalar

- `index.html` - Ana HTML dosyası
- `styles.css` - Tüm stiller (dark theme, animasyonlar, responsive)
- `script.js` - Tüm JavaScript fonksiyonları
- `data.js` - Proje verileri ve çeviriler

## ✨ Özellikler

✅ **Responsive Tasarım** - Mobil, tablet ve masaüstünde mükemmel görünüm
✅ **Dark Theme** - Modern karanlık tema
✅ **Dil Desteği** - Türkçe/İngilizce dil değiştirme
✅ **Smooth Scrolling** - Yumuşak kaydırma animasyonları
✅ **Portfolio Grid** - Proje galerisi
✅ **Tech Stack** - Teknoloji yığını gösterimi
✅ **Team Section** - Ekip üyeleri
✅ **AI Tool** - Simüle edilmiş AI proje açıklama oluşturucu
✅ **Animasyonlar** - Gradient animasyonlar, fade-in efektleri
✅ **Modal** - Proje detay modalı

## 🚀 Kullanım

1. `index.html` dosyasını bir tarayıcıda açın
2. Hepsi bu kadar! Sunucu gerektirmez.

### Tarayıcıda Açma

**Yöntem 1:** Dosyayı çift tıklayın
**Yöntem 2:** Tarayıcıya sürükle-bırak yapın
**Yöntem 3:** Tarayıcıda `Ctrl+O` yapıp dosyayı seçin

### Yerel Sunucu ile Çalıştırma (Opsiyonel)

Eğer bir yerel sunucu kullanmak isterseniz:

```bash
# Python 3
python -m http.server 8000

# Node.js (npx)
npx serve

# VS Code Live Server extension
# Sağ tık > Open with Live Server
```

## 🎨 Özelleştirme

### Renkleri Değiştirme

`styles.css` dosyasındaki `:root` değişkenlerini düzenleyin:

```css
:root {
    --primary: 262 80% 50%;    /* Ana renk */
    --accent: 262 80% 55%;     /* Vurgu rengi */
    /* ... */
}
```

### Proje Ekleme/Düzenleme

`data.js` dosyasındaki `projects` dizisini düzenleyin:

```javascript
const projects = [
  {
    id: 'portfolio-1',
    slug: 'proje-adi',
    title: 'Proje Başlığı',
    category: 'Kategori',
    description: 'Açıklama...',
    imageUrl: 'https://...'
  },
  // ...
];
```

### Ekip Üyeleri

`data.js` dosyasındaki `teamMembers` dizisini düzenleyin.

### Çevirileri Değiştirme

`data.js` dosyasındaki `translations` objesini düzenleyin.

## 📱 Responsive Breakpoints

- **Desktop:** > 768px
- **Mobile:** ≤ 768px

## 🌐 Tarayıcı Desteği

✅ Chrome (son 2 versiyon)
✅ Firefox (son 2 versiyon)
✅ Safari (son 2 versiyon)
✅ Edge (son 2 versiyon)

## 📝 Notlar

- Tüm görseller Unsplash'ten alınmıştır
- AI tool gerçek bir API kullanmaz, simüle edilmiştir
- Proje tamamen statiktir, backend gerektirmez
- Tüm veriler `data.js` dosyasında saklanır

## 🎯 Firebase Projesinden Farklar

- Next.js yerine saf HTML/CSS/JS
- Gerçek AI entegrasyonu yerine simülasyon
- Daha basit ve hafif
- Sunucu gerektirmez
- Daha kolay özelleştirme

Başarılar! 🚀
