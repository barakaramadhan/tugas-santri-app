import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <main className="max-w-6xl mx-auto px-6 py-10 space-y-16">
      
        <section id="hero">
          <Card className="overflow-hidden border shadow-sm">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-2">
                <div className="flex flex-col justify-center p-8 md:p-12">
                  <span className="w-fit rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
                    Dashboard Overview
                  </span>

                  <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
                    Kelola Data Santri
                    <span className="block text-muted-foreground">
                      dengan lebih mudah.
                    </span>
                  </h1>

                  <p className="mt-5 max-w-lg text-sm leading-6 text-muted-foreground">
                    Pantau data santri, nilai, dan absensi dalam satu dashboard
                    yang sederhana dan terorganisir.
                  </p>

                  <div className="mt-7 flex gap-3">
                    <Button>Mulai Kelola</Button>
                    <Button variant="outline">Lihat Data</Button>
                  </div>
                </div>

                <AspectRatio
                  ratio={1}
                  className="bg-muted flex items-center justify-center"
                >
                  <div className="text-center">
                    <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-2xl bg-background shadow-sm">
                      <span className="text-3xl font-bold">S</span>
                    </div>

                    <p className="font-semibold">Santri Management</p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Dashboard
                    </p>
                  </div>
                </AspectRatio>
              </div>
            </CardContent>
          </Card>
        </section>

        
        <section id="about" className="space-y-6">
          <div>
            <p className="text-sm font-medium text-muted-foreground">
              Overview
            </p>

            <h2 className="mt-1 text-3xl font-bold tracking-tight">
              Informasi Singkat
            </h2>

            <p className="mt-2 text-sm text-muted-foreground">
              Ringkasan data yang tersedia di dalam sistem.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardContent className="p-6">
                <p className="text-sm text-muted-foreground">
                  Total Santri
                </p>

                <h3 className="mt-2 text-3xl font-bold">
                  120
                </h3>

                <p className="mt-1 text-xs text-muted-foreground">
                  Santri terdaftar
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <p className="text-sm text-muted-foreground">
                  Kehadiran
                </p>

                <h3 className="mt-2 text-3xl font-bold">
                  94%
                </h3>

                <p className="mt-1 text-xs text-muted-foreground">
                  Rata-rata kehadiran
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <p className="text-sm text-muted-foreground">
                  Kelas
                </p>

                <h3 className="mt-2 text-3xl font-bold">
                  8
                </h3>

                <p className="mt-1 text-xs text-muted-foreground">
                  Kelas aktif
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <p className="text-sm text-muted-foreground">
                  Nilai
                </p>

                <h3 className="mt-2 text-3xl font-bold">
                  87.5
                </h3>

                <p className="mt-1 text-xs text-muted-foreground">
                  Rata-rata nilai
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

       
        <section id="testimony" className="space-y-6">
          <div>
            <p className="text-sm font-medium text-muted-foreground">
              Testimonial
            </p>

            <h2 className="mt-1 text-3xl font-bold tracking-tight">
              Apa Kata Pengguna?
            </h2>

            <p className="mt-2 text-sm text-muted-foreground">
              Pengalaman pengguna dalam menggunakan sistem.
            </p>
          </div>

          <div className="px-10">
            <Carousel className="w-full">
              <CarouselContent>
                {[1, 2, 3].map((item) => (
                  <CarouselItem
                    key={item}
                    className="md:basis-1/2 lg:basis-1/3"
                  >
                    <Card className="h-full">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-4">
                          <Avatar className="h-12 w-12">
                            <AvatarImage
                              src={`https://i.pravatar.cc/150?img=${item}`}
                            />
                            <AvatarFallback>
                              U{item}
                            </AvatarFallback>
                          </Avatar>

                          <div>
                            <h4 className="font-semibold">
                              User {item}
                            </h4>

                            <p className="text-xs text-muted-foreground">
                              Pengguna Dashboard
                            </p>
                          </div>
                        </div>

                        <p className="mt-5 text-sm leading-6 text-muted-foreground">
                          "Dashboard ini membantu saya mengelola data
                          dengan lebih cepat dan terorganisir."
                        </p>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>

              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </section>

        
        <section id="faq" className="space-y-6">
          <div>
            <p className="text-sm font-medium text-muted-foreground">
              FAQ
            </p>

            <h2 className="mt-1 text-3xl font-bold tracking-tight">
              Pertanyaan Umum
            </h2>

            <p className="mt-2 text-sm text-muted-foreground">
              Beberapa pertanyaan yang sering ditanyakan.
            </p>
          </div>

          <Card>
            <CardContent className="p-6">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>
                    Apa fungsi dashboard ini?
                  </AccordionTrigger>

                  <AccordionContent>
                    Dashboard digunakan untuk mengelola dan memantau data
                    santri, nilai, serta absensi secara lebih terorganisir.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger>
                    Apakah data santri dapat diperbarui?
                  </AccordionTrigger>

                  <AccordionContent>
                    Ya. Data dapat diperbarui sesuai kebutuhan melalui
                    halaman pengelolaan santri.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger>
                    Apakah nilai dan absensi dapat dikelola?
                  </AccordionTrigger>

                  <AccordionContent>
                    Ya. Sistem menyediakan halaman khusus untuk mengelola
                    nilai dan absensi setiap santri.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger>
                    Apakah dashboard dapat digunakan di berbagai perangkat?
                  </AccordionTrigger>

                  <AccordionContent>
                    Tampilan dashboard dibuat responsif sehingga dapat
                    digunakan pada desktop, tablet, maupun perangkat mobile.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </section>

    
        <footer id="footer" className="pt-4">
          <Separator />

          <div className="flex flex-col gap-4 py-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="font-semibold">
                Santri Management
              </h3>

              <p className="mt-1 text-xs text-muted-foreground">
                Sistem pengelolaan data santri.
              </p>
            </div>

            <div className="flex gap-2">
              <Button variant="ghost" size="sm">
                Bantuan
              </Button>

              <Button variant="ghost" size="sm">
                Tentang
              </Button>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}