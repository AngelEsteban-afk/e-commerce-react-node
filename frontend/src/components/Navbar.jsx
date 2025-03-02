import { Link } from "react-router-dom";
import { ShoppingCart, LogIn, UserPlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-xl font-bold text-gray-800">
              E-commerce
            </Link>
          </div>

          {/* Menú para pantallas grandes */}
          <div className="hidden md:flex space-x-8 items-center">
            <Link to="/" className="text-gray-800 hover:text-blue-500">
              Inicio
            </Link>
            <Link to="/products" className="text-gray-800 hover:text-blue-500">
              Productos
            </Link>
            <Link to="/cart" className="text-gray-800 hover:text-blue-500">
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
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger>
                <Button variant="outline" size="icon">
                  <ShoppingCart className="h-4 w-4" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <div className="flex flex-col space-y-4 mt-6">
                  <Link to="/" className="text-gray-800 hover:text-blue-500">
                    Inicio
                  </Link>
                  <Link
                    to="/products"
                    className="text-gray-800 hover:text-blue-500"
                  >
                    Productos
                  </Link>
                  <Link
                    to="/cart"
                    className="text-gray-800 hover:text-blue-500"
                  >
                    Carrito
                  </Link>
                  <Link
                    to="/login"
                    className="text-gray-800 hover:text-blue-500"
                  >
                    Iniciar Sesión
                  </Link>
                  <Link
                    to="/register"
                    className="text-gray-800 hover:text-blue-500"
                  >
                    Registrarse
                  </Link>
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
