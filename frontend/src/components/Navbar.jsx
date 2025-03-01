"use client";

import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ShoppingCart,
  Menu,
  X,
  Home,
  Package,
  LogOut,
  LogIn,
  UserPlus,
} from "lucide-react";

// Esta variable simularía el estado de autenticación
const isAuthenticated = false;

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo y botón de menú móvil */}
          <div className="flex items-center">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
              <span className="sr-only">Abrir menú</span>
            </button>
            <Link
              href="/"
              className="ml-2 md:ml-0 text-xl font-bold text-gray-900"
            >
              Mi Tienda
            </Link>
          </div>

          {/* Menú de navegación para escritorio */}
          <nav className="hidden md:flex md:items-center md:space-x-6">
            <Link
              href="/"
              className="flex items-center text-gray-700 hover:text-blue-600"
            >
              <Home className="mr-1 h-4 w-4" />
              <span>Inicio</span>
            </Link>
            <Link
              href="/carrito"
              className="flex items-center text-gray-700 hover:text-blue-600"
            >
              <ShoppingCart className="mr-1 h-4 w-4" />
              <span>Carrito</span>
            </Link>
            <Link
              href="/ordenes"
              className="flex items-center text-gray-700 hover:text-blue-600"
            >
              <Package className="mr-1 h-4 w-4" />
              <span>Ordenes</span>
            </Link>
          </nav>

          {/* Botones de autenticación para escritorio */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            {isAuthenticated ? (
              <Link
                href="/logout"
                className="flex items-center rounded-md bg-gray-100 px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200"
              >
                <LogOut className="mr-1 h-4 w-4" />
                <span>Cerrar sesión</span>
              </Link>
            ) : (
              <>
                <Link
                  href="/login"
                  className="flex items-center rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"
                >
                  <LogIn className="mr-1 h-4 w-4" />
                  <span>Iniciar sesión</span>
                </Link>
                <Link
                  href="/register"
                  className="flex items-center rounded-md bg-blue-600 px-3 py-2 text-sm font-medium text-white hover:bg-blue-700"
                >
                  <UserPlus className="mr-1 h-4 w-4" />
                  <span>Registrarse</span>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Menú móvil */}
      <div className={`md:hidden ${mobileMenuOpen ? "block" : "hidden"}`}>
        <div className="space-y-1 px-4 pb-3 pt-2">
          <Link
            href="/"
            className="flex items-center rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100"
            onClick={() => setMobileMenuOpen(false)}
          >
            <Home className="mr-2 h-5 w-5" />
            <span>Inicio</span>
          </Link>
          <Link
            href="/carrito"
            className="flex items-center rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100"
            onClick={() => setMobileMenuOpen(false)}
          >
            <ShoppingCart className="mr-2 h-5 w-5" />
            <span>Carrito</span>
          </Link>
          <Link
            href="/ordenes"
            className="flex items-center rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100"
            onClick={() => setMobileMenuOpen(false)}
          >
            <Package className="mr-2 h-5 w-5" />
            <span>Ordenes</span>
          </Link>
          {isAuthenticated ? (
            <Link
              href="/logout"
              className="flex items-center rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              <LogOut className="mr-2 h-5 w-5" />
              <span>Cerrar sesión</span>
            </Link>
          ) : (
            <>
              <Link
                href="/login"
                className="flex items-center rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100"
                onClick={() => setMobileMenuOpen(false)}
              >
                <LogIn className="mr-2 h-5 w-5" />
                <span>Iniciar sesión</span>
              </Link>
              <Link
                href="/register"
                className="flex items-center rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100"
                onClick={() => setMobileMenuOpen(false)}
              >
                <UserPlus className="mr-2 h-5 w-5" />
                <span>Registrarse</span>
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
