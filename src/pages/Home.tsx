import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background">
      <div className="text-center space-y-6 max-w-2xl mx-auto px-4">
        <h1 className="text-6xl font-bold tracking-tight">
          Thrift<span className="text-primary">Packs</span>
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          Discover amazing thrift finds and sustainable shopping solutions
        </p>
        <div className="flex gap-4 justify-center mt-8">
          <Link to="/checkout">
            <Button size="lg" className="px-8">
              Get Started
            </Button>
          </Link>
          <Button variant="outline" size="lg" className="px-8">
            Learn More
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Home;