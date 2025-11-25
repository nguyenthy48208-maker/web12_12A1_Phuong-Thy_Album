// Audio Player Functionality
        let isPlaying = false;
        const audio = document.getElementById('audio');
        const audioPlayer = document.getElementById('audioPlayer');
        const progress = document.getElementById('progress');
        const playBtn = document.querySelector('.play-btn');

        function toggleAudio() {
            audioPlayer.classList.toggle('active');
        }

        function closeAudio() {
            audioPlayer.classList.remove('active');
            audio.pause();
            isPlaying = false;
            playBtn.textContent = '▶';
        }

        function togglePlayback() {
            if (isPlaying) {
                audio.pause();
                playBtn.textContent = '▶';
            } else {
                audio.play();
                playBtn.textContent = '⏸';
            }
            isPlaying = !isPlaying;
        }

        audio.addEventListener('timeupdate', () => {
            const percentage = (audio.currentTime / audio.duration) * 100;
            progress.style.width = percentage + '%';
        });

        audio.addEventListener('ended', () => {
            isPlaying = false;
            playBtn.textContent = '▶';
            progress.style.width = '0%';
        });

        function subscribeNewsletter(event) {
            event.preventDefault();
            alert('Thank you for subscribing! (Connect this to your newsletter service)');
            event.target.reset();
        }

        // Iframe Preview Functionality
        function loadIframe() {
            const urlInput = document.getElementById('iframeUrl');
            const iframe = document.getElementById('previewFrame');
            const placeholder = document.querySelector('.iframe-placeholder');
            const url = urlInput.value.trim();

            if (url) {
                iframe.src = url;
                placeholder.style.display = 'none';
                iframe.style.display = 'block';
            } else {
                alert('Vui lòng nhập URL');
            }
        }

        // Copy link to iframe preview section
        function copyToIframe(url) {
            const urlInput = document.getElementById('iframeUrl');
            const iframe = document.getElementById('previewFrame');
            const placeholder = document.querySelector('.iframe-placeholder');
            
            urlInput.value = url;
            iframe.src = url;
            placeholder.style.display = 'none';
            iframe.style.display = 'block';
            
            document.getElementById('preview').scrollIntoView({ behavior: 'smooth' });
            
            const notification = document.createElement('div');
            notification.className = 'copy-notification';
            notification.textContent = '✓ Đã tải vào xem trước!';
            document.body.appendChild(notification);
            
            setTimeout(() => {
                notification.classList.add('show');
            }, 10);
            
            setTimeout(() => {
                notification.classList.remove('show');
                setTimeout(() => notification.remove(), 300);
            }, 2000);
        }

        // Smooth scrolling
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            });
        });