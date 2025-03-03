import { Link } from "react-router-dom";
import { Menu, ShoppingCart, LogIn, UserPlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Navbar = () => {
  return (
    <nav className="bg-background border-b fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-xl font-bold text-foreground">
              E-commerce
            </Link>
          </div>

          {/* Menú para pantallas grandes */}
          <div className="hidden md:flex space-x-8 items-center">
            <Link
              to="/"
              className="text-foreground hover:text-primary transition-colors"
            >
              Inicio
            </Link>
            <Link
              to="/products"
              className="text-foreground hover:text-primary transition-colors"
            >
              Productos
            </Link>
            <Link
              to="/cart"
              className="text-foreground hover:text-primary transition-colors"
            >
              Carrito
            </Link>
          </div>

          {/* Botones de Iniciar Sesión y Registro */}
          <div className="hidden md:flex space-x-4">
            <Link to="/login">
              <Button variant="outline" className="flex items-center">
                <LogIn className="mr-2 h-4 w-4" /> Iniciar Sesión
              </Button>
            </Link>
            <Link to="/register">
              <Button className="flex items-center">
                <UserPlus className="mr-2 h-4 w-4" /> Registrarse
              </Button>
            </Link>
          </div>

          {/* Menú para dispositivos móviles */}
          <div className="flex items-center space-x-4 md:hidden">
            <Link to="/cart">
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart className="h-5 w-5" />
              </Button>
            </Link>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Abrir menú</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <div className="flex flex-col space-y-4 mt-6">
                  <Link
                    to="/"
                    className="text-foreground hover:text-primary py-2 transition-colors"
                  >
                    Inicio
                  </Link>
                  <Link
                    to="/products"
                    className="text-foreground hover:text-primary py-2 transition-colors"
                  >
                    Productos
                  </Link>
                  <Link
                    to="/cart"
                    className="text-foreground hover:text-primary py-2 transition-colors"
                  >
                    Carrito
                  </Link>
                  <div className="border-t pt-4 mt-4">
                    <Link to="/login" className="w-full">
                      <Button
                        variant="outline"
                        className="w-full justify-start mb-2"
                      >
                        <LogIn className="mr-2 h-4 w-4" /> Iniciar Sesión
                      </Button>
                    </Link>
                    <Link to="/register" className="w-full">
                      <Button className="w-full justify-start">
                        <UserPlus className="mr-2 h-4 w-4" /> Registrarse
                      </Button>
                    </Link>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
