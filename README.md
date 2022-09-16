# Angular ve Active Directory & Keycloak & Single Sing On

Bu projemde Active Directory server için sanal makina üzerinde Windows Server kurdum ve çalıştırdım. Linux üzerine ise KeyCloak çalıştırıp servise açtım.
Virtual Box üzerinde Yalnızca Anamakina ağ bağdaştırıcısını seçerek hem sanal makinelerimin birbiriyle iletişimini sağladım hem de sanal makinelerim fiziksel makinemle iletişime geçebiliyordu. Tabiki bunun için her bir makineyi aynı ağa bağlamam gerekiyordu bunun için ise manuel olarak her bir makineye ip adresi dağıttım. örnek olarak
Windows Server=192.168.1.1,Linux =192.168.1.2, Fiziksel PC = 192.168.1.3 vs.

Hepsini aynı ağa bağladıktan sonra Linux üzerinden çalışan Keycloak uygulaması Windows Server üzerinde çalışan Active Directory hizmetine bağlanarak veritabanında bulunan kullanıcıları kendi bünyesine aldı.

Fiziksel bilgisayarım üzerinde çalışan bu Web Uygulaması ise login yapmaya çalıştığımızda  8080 portunda hizmet veren Keycloak servisine bağlanıp (192.168.1.2:8080) girilen bilgilerle bir istekte bulunuyor eğer girilen kullanıcı adı ve şifresi doğru ise Keycloak, Angular uygulamasına bir JWT token gönderip Authentication sağlamış oluyor.  
