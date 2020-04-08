const Cipher = require('../utils/Cipher')
const connection = require('../database/userConnection');

module.exports = {
    async register(req, res) {
        const { user_name, user_email, user_senha, user_idade } = req.body;
        
        const user_id = Cipher.id();

        const c_user_senha = Cipher.criptografar(user_senha);

        await connection('users').insert({
            user_id,
            user_name,
            user_email,
            user_senha: c_user_senha,
            user_idade,
            user_inativo: 0
        });
    
        return res.json({ user_id });
    },
    
    async validEmail(req, res) {
        const { user_email } = req.body;

        const user = await connection('users')
            .where('user_email', user_email)
            .select('*')
            .first();

        if (!user) {
            return res.json({ valid : 1 });
        }

        return res.json({valid : 0});
    },

    async login(req, res) {
        const { user_email, user_senha } = req.body;

        const user = await connection('users')
            .where({
                    'user_email': user_email,
                    'user_senha': Cipher.criptografar(user_senha),
                    'user_inativo': 0
            })
            .select('*')
            .first();

        if (!user) {
            return res.status(400).json({ error: 'No User found' });
        }

        return res.json({ user });
    }
};