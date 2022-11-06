const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient()

exports.userInsert = async (req, res) => {
    let { address, chainId } = req.body;
    try {
        const user = await prisma.User.create({ data: { address: address, chainId: chainId } });
        if (Object.keys(user).length > 0) {
            return res.json({ success: true, message: "User inerted successfully" });
        } else {
            return res.json({ success: false, message: "Internal server error" });
        }
    } catch (error) {
        console.log(error);
        return res.json({ success: false, message: "Internal server error" });
    }
}