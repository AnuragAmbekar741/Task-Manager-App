const { z } = require('zod');

const TaskValidationSchema = z.object({
    title: z.string(
        { required_error: 'Title is required' }
    ).max(100, { message: 'Title cannot exceed 100 charachter' }),
    description: z.string().max(500, 'Description cannot exceed 100 charachter'),
    status: z.enum(['todo', 'in progress', 'completed']).default('todo'),
    priority: z.enum(['low', 'medium', 'high']).default('medium'),
    dueDate: z.date().optional(),
    userId: z.string().min(1, { message: "User ID is required" })
})

module.exports = { TaskValidationSchema }