import { getAllPosts, Post } from '@/lib/blog';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import Image from 'next/image';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { format } from 'date-fns';

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="container py-12 md:py-20">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold font-headline">From the Blog</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Insights on design, technology, and business growth.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post: Post) => (
          <Link href={`/blog/${post.slug}`} key={post.slug} className="block">
            <Card className="h-full overflow-hidden transition-shadow hover:shadow-lg">
              <Image
                src={post.image}
                alt={post.title}
                width={800}
                height={400}
                className="w-full h-48 object-cover"
                data-ai-hint={post.imageHint}
              />
              <CardHeader>
                <CardTitle className="font-headline leading-tight">{post.title}</CardTitle>
                <CardDescription className="pt-2">{post.excerpt}</CardDescription>
              </CardHeader>
              <CardFooter>
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage src={post.author.avatar} alt={post.author.name} />
                    <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-sm">{post.author.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {format(new Date(post.date), 'MMMM d, yyyy')}
                    </p>
                  </div>
                </div>
              </CardFooter>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
