import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  // Mock checking if user is logged in on mount
  useEffect(() => {
    const storedUser = localStorage.getItem("edunest_user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setIsLoading(false);
  }, []);

  const login = async (email, password, role = "admin") => {
    setIsLoading(true);
    // Mock API call
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (email && password) {
          const mockUser = {
            id: "1",
            name: "John Doe",
            email,
            role, // 'admin', 'teacher', 'student'
            avatar: "https://i.pravatar.cc/150?u=admin"
          };
          setUser(mockUser);
          localStorage.setItem("edunest_user", JSON.stringify(mockUser));
          resolve(mockUser);
        } else {
          reject(new Error("Invalid credentials"));
        }
        setIsLoading(false);
      }, 1000);
    });
  };

  const register = async (name, email, password, role) => {
    setIsLoading(true);
    // Mock API call
    return new Promise((resolve) => {
      setTimeout(() => {
        const mockUser = { id: "2", name, email, role, avatar: `https://i.pravatar.cc/150?u=${name}` };
        setUser(mockUser);
        localStorage.setItem("edunest_user", JSON.stringify(mockUser));
        resolve(mockUser);
        setIsLoading(false);
      }, 1000);
    });
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("edunest_user");
    navigate("/login");
  };

  const updateUser = (updatedData) => {
    const newUser = { ...user, ...updatedData };
    setUser(newUser);
    localStorage.setItem("edunest_user", JSON.stringify(newUser));
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout, updateUser, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
