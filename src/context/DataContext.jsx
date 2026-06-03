import { createContext, useContext, useState } from 'react';

const DataContext = createContext(null);

// Initial Mock Data
const initialStudents = [
  { id: "STU-001", name: "Olivia Martin", grade: "Grade 10", email: "olivia.martin@email.com", status: "Active" },
  { id: "STU-002", name: "Jackson Lee", grade: "Grade 9", email: "jackson.lee@email.com", status: "Active" },
  { id: "STU-003", name: "Isabella Nguyen", grade: "Grade 11", email: "isabella.nguyen@email.com", status: "Active" },
  { id: "STU-004", name: "William Kim", grade: "Grade 11", email: "will@email.com", status: "Inactive" },
];

const initialTeachers = [
  { id: "TCH-01", name: "Dr. Sarah Jenkins", subject: "Mathematics", email: "sarah.j@edunest.com", phone: "+1 (555) 123-4567", classes: 4 },
  { id: "TCH-02", name: "Prof. Michael Chen", subject: "Physics", email: "m.chen@edunest.com", phone: "+1 (555) 234-5678", classes: 3 },
];

const initialFees = [
  { id: "INV-2023-001", student: "Olivia Martin", date: "Oct 24, 2026", amount: "$1,999.00", status: "Paid" },
  { id: "INV-2023-002", student: "Jackson Lee", date: "Oct 23, 2026", amount: "$1,999.00", status: "Pending" },
];

const initialNotices = [
  { id: 1, title: "Annual Sports Day 2026", date: "Oct 15, 2026", target: "All Students", type: "Event", priority: "High" },
  { id: 2, title: "Mid-Term Examination Schedule", date: "Oct 10, 2026", target: "High School", type: "Academic", priority: "High" },
];

export const DataProvider = ({ children }) => {
  const [students, setStudents] = useState(initialStudents);
  const [teachers, setTeachers] = useState(initialTeachers);
  const [fees, setFees] = useState(initialFees);
  const [notices, setNotices] = useState(initialNotices);

  // Student Actions
  const addStudent = (student) => {
    setStudents([{ id: `STU-00${students.length + 1}`, ...student, status: 'Active' }, ...students]);
  };
  
  const removeStudent = (id) => {
    setStudents(students.filter(s => s.id !== id));
  };

  // Teacher Actions
  const addTeacher = (teacher) => {
    setTeachers([{ id: `TCH-0${teachers.length + 1}`, ...teacher, classes: 0 }, ...teachers]);
  };

  const removeTeacher = (id) => {
    setTeachers(teachers.filter(t => t.id !== id));
  };

  // Fee Actions
  const addFee = (fee) => {
    setFees([{ id: `INV-2023-00${fees.length + 1}`, date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }), ...fee }, ...fees]);
  };

  // Notice Actions
  const addNotice = (notice) => {
    setNotices([{ id: notices.length + 1, date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }), ...notice }, ...notices]);
  };

  const removeNotice = (id) => {
    setNotices(notices.filter(n => n.id !== id));
  };

  return (
    <DataContext.Provider value={{
      students,
      teachers,
      fees,
      notices,
      addStudent,
      removeStudent,
      addTeacher,
      removeTeacher,
      addFee,
      addNotice,
      removeNotice,
    }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
